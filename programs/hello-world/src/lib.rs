mod address_info;

use address_info::*;
use anchor_lang::prelude::*;

declare_id!("7CtkSqRxhFZE9w1kJPBuHX7in11xpZEHiERgdAKmNPfZ");

#[program]
pub mod hello_world {
    use super::*;

    pub fn hello(ctx: Context<Hello>) -> Result<()> {
        msg!("Hello, Solana!");
        msg!("Our program's Program ID: {}", &id());

        Ok(())
    }

    // pub fn create_address_info(
    //     ctx: Context<CreateAddressInfo>,
    //     name: String,
    //     house_number: u8,
    //     street: String,
    //     city: String,
    // ) -> Result<()> {
    //     create::create_address_info(ctx, name, house_number, street, city)
    // }
}

#[derive(Accounts)]
pub struct Hello<'info> {
    #[account(mut)]
    payer: Signer<'info>,
    system_program: Program<'info, System>,
}
