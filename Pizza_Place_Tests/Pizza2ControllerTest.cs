using Microsoft.AspNetCore.Mvc;
using Pizza_App;
using Pizza_App.Controllers;
using Pizza_App.Models;

namespace Pizza_Place_Tests
{
    public class Pizza2ControllerTest
    {
        Pizza2Controller _controller;
        IPizzaRepo _repo;

        public Pizza2ControllerTest()
        {
            _repo = new PizzaRepo();
            _controller = new Pizza2Controller(_repo);
        }

        [Fact]
        public void PriceCalculationTest1()
        {
            var obj = _controller.GetPrice("Small", 3);
            var price = obj.Result as OkObjectResult;
            Assert.Equal("11", price.Value.ToString());
        }

        [Fact]
        public void PriceCalculationTest2()
        {
            var obj = _controller.GetPrice("Medium", 4);
            var price = obj.Result as OkObjectResult;
            Assert.Equal("12,6", price.Value.ToString());
        }

        [Fact]
        public void GetAllTest()
        {
            var obj = _controller.Get();
            var list = obj.Result as List<Pizza>;
            Assert.Equal(0, list.Count);
        }

        [Fact]
        public void PostTest()
        {
            var data = new Pizza
            {
                Name = "2023-10-23 11:25:00",
                Size = "Small",
                Toppings = "Sause, Cheese",
                Price = 10.00,
                ToppingsCount = 2
            };
            var response = _controller.Post(data);
            var obj = _controller.Get();
            var list = obj.Result as List<Pizza>;
            Assert.Equal(1, list.Count);
        }
    }
}