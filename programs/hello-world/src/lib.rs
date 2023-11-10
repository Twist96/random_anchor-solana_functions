#![allow(clippy::result_large_err)]

mod instructions;
mod state;

use anchor_lang::prelude::*;
use crate::instructions::*;

declare_id!("7CtkSqRxhFZE9w1kJPBuHX7in11xpZEHiERgdAKmNPfZ");

#[program]
pub mod hello_world {
    use super::*;

    pub fn create_address_info(
        ctx: Context<CreateAddressInfo>,
        name: String,
        house_number: u8,
        street: String,
        city: String,
    ) -> Result<()> {
        return create::create_address_info(ctx, name, house_number, street, city);
    }
}
