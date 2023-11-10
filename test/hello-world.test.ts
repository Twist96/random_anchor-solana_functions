import * as anchor from "@coral-xyz/anchor";

describe("hello-word", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const idl = require("../../target/idl/hello_world.json");
  const program = new anchor.Program(
    idl,
    new anchor.web3.PublicKey("7CtkSqRxhFZE9w1kJPBuHX7in11xpZEHiERgdAKmNPfZ"),
    provider
  );
  const payer = provider.wallet as anchor.Wallet;

  it("Says hello!", async () => {
    await program.methods
      .hello()
      .accounts({
        payer: payer.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([payer.payer])
      .rpc();
  });
});
