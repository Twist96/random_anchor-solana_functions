import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { HelloWorld } from "../target/types/hello_world";

describe("hello-world", () => {
  // Configure the client to use the local cluster.
  // const env = anchor.AnchorProvider.env()
  // console.log({env})
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.HelloWorld as Program<HelloWorld>;
  const payer = provider.wallet as anchor.Wallet;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods
      .hello()
      .accounts({
        payer: payer.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([payer.payer])
      .rpc();
    console.log("Your transaction signature", tx);
  });
});
