import * as anchor from "@coral-xyz/anchor"
import { TransferSol } from "../target/types/transfer_sol"
import {
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction
} from "@solana/web3.js";
import {it} from "mocha";

describe("transfer-sol", () => {
    const provider = anchor.AnchorProvider.env()
    anchor.setProvider(provider)
    const payer = provider.wallet as anchor.Wallet
    const program = anchor.workspace.TransferSol as anchor.Program<TransferSol>

    // 1 SOL
    const transferAmount = 1 * LAMPORTS_PER_SOL
    console.log({transferAmount})

    // Generate a new keypair for recipient
    const recipient = new Keypair()

    // Generate a new keypair to create an account owned by our program
    const programOwnedAccount = new Keypair()

    it("Transfer SOL with CPI", async () => {
        await  getBalance(payer.publicKey, recipient.publicKey, "Beginning")

        await program.methods
            .transferSolWithCpi(new anchor.BN(transferAmount))
            .accounts({payer: payer.publicKey, recipient: payer.publicKey})
            .rpc()

        await getBalance(payer.publicKey, recipient.publicKey, "Resulting")
    })

    it("Create and fund account owned by the program", async () => {
        const instruction = SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: programOwnedAccount.publicKey,
            space: 0,
            lamports: LAMPORTS_PER_SOL,
            programId: program.programId
        })

        const transaction = new Transaction().add(instruction)
        await sendAndConfirmTransaction(provider.connection, transaction, [payer.payer, programOwnedAccount])
    })

    it("Transfer SOL with Program", async () => {
        await getBalance(programOwnedAccount.publicKey, payer.publicKey, "Beginning")

        await program.methods
            .transferSolWithProgram(new anchor.BN(transferAmount))
            .accounts({
                payer: programOwnedAccount.publicKey,
                recipient: payer.publicKey
            })
            .rpc()

        await getBalance(programOwnedAccount.publicKey, payer.publicKey, "Resulting")
    })



    async function getBalance(
        payerPublicKey: PublicKey,
        recipientPublicKey: PublicKey,
        timeframe: string
    ) {
        let payerBalance = await provider.connection.getBalance(payerPublicKey)
        let recipientBalance: number = await provider.connection.getBalance(recipientPublicKey)
        console.log(`${timeframe} balances:`)
        console.log(`   Payer: ${payerBalance / LAMPORTS_PER_SOL}`)
        console.log(`   Recipient: ${recipientBalance / LAMPORTS_PER_SOL}`)
    }
})