using OnlineShopService.Data;
using OnlineShopService.Interface;
using OnlineShopService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopService.Repository
{
    public class ProductRepository : IProductRepository
    {
        private OnlineShopContext OnlineShopContext { get; set; }

        public ProductRepository(OnlineShopContext onlineShopContext)
        {
            OnlineShopContext = onlineShopContext;
        }

        public IQueryable<Product> GetAllProducts()
        {
            return OnlineShopContext.Products;
        }

        protected void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (OnlineShopContext != null)
                {
                    OnlineShopContext.Dispose();
                    OnlineShopContext = null;
                }
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
