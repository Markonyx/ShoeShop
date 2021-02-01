using OnlineShopService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopService.Interface
{
    public interface IProductRepository
    {
        IQueryable<Product> GetAllProducts();
    }
}
