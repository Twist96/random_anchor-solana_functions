use anchor_lang::prelude::*;

declare_id!("EbBXLzvDeJc6ERweipVfecyiig2L1yFmm9MX7nZKbKJQ");

pub mod instructions;
use instructions::*;

#[program]
pub mod pda_rent_payer {
    use super::*;

    pub fn init_rent_vault(ctx: Context<InitRentVault>, fund_lamports: u64) -> Result<()> {
        init_rent_vault::init_rent_vault(ctx, fund_lamports)
    }

    pub fn create_new_account(ctx: Context<CreateNewAccount>) -> Result<()> {
        create_new_account::create_new_account(ctx)
    }
}

#[derive(Accounts)]
pub struct Initialize {}
