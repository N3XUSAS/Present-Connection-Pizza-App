using Pizza_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Pizza_App
{
    public class AppDB : DbContext
    {
        protected override void OnConfiguring
       (DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "PizzaDB");

        }
        public DbSet<Pizza> Pizzas { get; set; }
    }
}
