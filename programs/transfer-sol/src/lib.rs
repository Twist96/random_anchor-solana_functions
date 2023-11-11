use anchor_lang::prelude::*;

declare_id!("GqJvezkYZRq3HbFQ79mhvwBvd4btii9ADdre1QgcBsdG");

mod instructions;
use instructions::*;

#[program]
pub mod transfer_sol {
    use super::*;

    pub fn transfer_sol_with_cpi(ctx: Context<TransferSolWithCpi>, amount: u64) -> Result<()> {
        return transfer_sol_with_cpi::transfer_sol_with_cpi(ctx, amount);
    }

    pub fn transfer_sol_with_program(ctx: Context<TransferSolWithProgram>, amount: u64) -> Result<()> {
        return transfer_sol_with_program::transfer_sol_with_program(ctx, amount)
    }
}
