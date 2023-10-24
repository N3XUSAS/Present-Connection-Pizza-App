using Microsoft.EntityFrameworkCore;
using Pizza_App.Models;

namespace Pizza_App
{
    public class PizzaRepo : IPizzaRepo
    {
        public async Task<IReadOnlyList<Pizza>> Get()
        {
            using (var context = new AppDB())
            {
                return await context.Pizzas.ToListAsync();
            }
        }

        public async Task Post(Pizza pizza)
        {
            using (var context = new AppDB())
            {
                context.Pizzas.Add(pizza);
                await context.SaveChangesAsync();
            }
        }
    }
}
