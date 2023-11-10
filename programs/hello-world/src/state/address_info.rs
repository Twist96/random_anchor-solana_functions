use anchor_lang::prelude::*;

#[account]
#[derive] //automatically calculate the space required for the struct
pub struct AddressInfo {
    #[max_len(50)] //max length for the string
    pub name: String, // 4 bytes + 50 bytes
    pub house_number: u8, // 1 byte
    #[max_len(50)]
    pub street: String, // 4 bytes + 50 bytes
    #[max_len(50)]
    pub city: String, // 4 bytes + 50 bytes
}
