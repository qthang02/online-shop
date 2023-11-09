using Microsoft.EntityFrameworkCore;
using Models;

namespace Data;

public static class DataSeeder
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var _context = new ShopDataContext(serviceProvider.GetRequiredService<DbContextOptions<ShopDataContext>>()))
        {
            if (!_context.Categories.Any())
            {
                var categories = new List<Category>
                {
                    new Category { Name = "Summer Fashion" },
                    new Category { Name = "Daily Clothes" },
                    new Category { Name = "Winter Fashion" }
                };

                _context.Categories.AddRange(categories);
                _context.SaveChanges();
            }

            if (!_context.Products.Any())
            {
                var products = new List<Product>
                {
                    new Product
                    {
                        Name = "Banana Republic",
                        Description = "Banana Republic Palma Linen Bermuda Short, $100.00 $79.99, available at Banana Republic.",
                        Price = 79.99m,
                        Size = Size.M,
                        ImageUrl = "https://www.refinery29.com/images/11416932.jpg?format=webp&width=545&height=727&quality=85",
                        CategoryId = _context.Categories.FirstOrDefault(c => c.Name == "Summer Fashion")!.CategoryId
                    },
                    new Product
                    {
                        Name = "Anti-logo",
                        Description = "Flashy logos are definitely out this upcoming season, and you can thank the fashion gods for that",
                        Price = 1199.99m,
                        Size = Size.L,
                        ImageUrl = "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1692811639a-653688256f85f.jpg?resize=980:*",
                        CategoryId = _context.Categories.FirstOrDefault(c => c.Name == "Winter Fashion")!.CategoryId
                    },
                    new Product
                    {
                        Name = "T-Shirt",
                        Description = "Casual cotton t-shirt",
                        Price = 19.99m,
                        Size = Size.M,
                        ImageUrl = "https://owen.cdn.vccloud.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/t/s/tsn220396_1_.jpg",
                        CategoryId = _context.Categories.FirstOrDefault(c => c.Name == "Daily Clothes")!.CategoryId
                    }
                };

                _context.Products.AddRange(products);
                _context.SaveChanges();
            }
        }
    }
}