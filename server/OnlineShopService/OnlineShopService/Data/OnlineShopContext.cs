using Microsoft.EntityFrameworkCore;
using OnlineShopService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopService.Data
{
    public class OnlineShopContext : DbContext
    {
        public OnlineShopContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }
    }
}
