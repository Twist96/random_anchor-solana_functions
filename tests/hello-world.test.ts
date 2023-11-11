import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { HelloWorld } from "../target/types/hello_world";
import { Keypair } from "@solana/web3.js";

// describe("hello-world", () => {
//   // Configure the client to use the local cluster.
//   // const env = anchor.AnchorProvider.env()
//   // console.log({env})
//   const provider = anchor.AnchorProvider.env();
//   anchor.setProvider(provider);
//
//   const program = anchor.workspace.HelloWorld as Program<HelloWorld>;
//   const payer = provider.wallet as anchor.Wallet;
//   const addressInfoAccount = new Keypair()
//
//   it("Create the address info account", async () => {
//     console.log(`Payer Address ${payer.publicKey}`)
//     console.log(`Address info Acct ${addressInfoAccount.publicKey}`)
//
//     // Instruction data
//     const addressInfo = {
//       name: "Matthew Chukwuemeka",
//       houseNumber: 189,
//       street: "Dr. Kennedy Okonkwo street.",
//       city: "Lagos Nigeria"
//     }
//
//     await program.methods
//         .createAddressInfo(
//             addressInfo.name,
//             addressInfo.houseNumber,
//             addressInfo.street,
//             addressInfo.city
//         )
//         .accounts({
//           addressInfo: addressInfoAccount.publicKey,
//           payer: payer.publicKey
//         })
//         .signers([addressInfoAccount])
//         .rpc()
//   });
//
//   it("Read the new account's data", async () => {
//     const addressInfo = await program.account.addressInfo.fetch(addressInfoAccount.publicKey)
//     console.log(`Name       : ${addressInfo.name}`)
//     console.log(`House Num  : ${addressInfo.houseNumber}`)
//     console.log(`Street     : ${addressInfo.street}`)
//     console.log(`City       : ${addressInfo.city}`)
//   })
// });
