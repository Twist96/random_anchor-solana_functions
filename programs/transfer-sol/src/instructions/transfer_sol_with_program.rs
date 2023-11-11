declare_id!("GqJvezkYZRq3HbFQ79mhvwBvd4btii9ADdre1QgcBsdG");

use anchor_lang::prelude::*;
#[derive(Accounts)]
pub struct TransferSolWithProgram<'info> {
    /// CHECK: Use owner constraint to check account is owned by our program.
    #[account(
    mut,
    owner = id() // value of declare_id!()
    )]
    payer: UncheckedAccount<'info>,
    #[account(mut)]
    recipient: SystemAccount<'info>
}

pub fn transfer_sol_with_program(ctx: Context<TransferSolWithProgram>, amount: u64) -> Result<()> {
    **ctx.accounts.payer.try_borrow_mut_lamports()? -= amount;
    **ctx.accounts.recipient.try_borrow_mut_lamports()? += amount;
    Ok(())
}