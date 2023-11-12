using Microsoft.AspNetCore.Identity;

namespace Entities;

public class User : IdentityUser<int>
{
    public UserAddress Address { get; set; }
}