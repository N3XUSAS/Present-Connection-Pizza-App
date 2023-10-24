using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pizza_App.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Pizza_App.Controllers
{
    [Route("api/pizza2")]
    [ApiController]
    public class Pizza2Controller : ControllerBase
    {
        private readonly IPizzaRepo _repo;

        public Pizza2Controller(IPizzaRepo repo)
        {
            _repo = repo;
        }
        //Gets all orders
        [HttpGet]
        [Route("get")]
        public async Task<IEnumerable<Pizza>> Get()
        {
            var result = await _repo.Get();
            return result;
        }
        //Adds order
        [HttpPost]
        [Route("post")]
        public async Task<ActionResult<Pizza>> Post(Pizza pizza)
        {
            var result = new Pizza { Name = pizza.Name, Size = pizza.Size, Toppings = pizza.Toppings, Price = pizza.Price, ToppingsCount = pizza.ToppingsCount };
            await _repo.Post(result);
            return null;
        }
        //Calculates price for order
        [HttpGet]
        [Route("price")]
        public ActionResult<double> GetPrice(string size, int toppings)
        {
            double price;
            if (size == "Small")
                price = 8.00;
            else if (size == "Medium")
                price = 10.00;
            else if (size == "Large")
                price = 12.00;
            else
                return Ok(price = 0);

            price += 1.00 * toppings;

            if (toppings > 3)
                price = (price / 10) * 9;

            return Ok(Math.Round(price, 2));
        }
    }
}
