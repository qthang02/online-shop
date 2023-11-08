using Microsoft.EntityFrameworkCore;
using Models;

namespace Data;

public class ShopDataContext : DbContext
{
    public ShopDataContext(DbContextOptions<ShopDataContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; } = default!;
}