namespace Pizza_App.Models
{
    public class Pizza
    {
        public int PizzaId { get; set; }
        public string Name { get; set; }
        public string Size { get; set; }
        public string Toppings { get; set; }
        public double Price { get; set;}
        public int ToppingsCount { get; set;}

        public Pizza(int pizzaId, string name, string size, string toppings, double price, int toppingsCount)
        {
            PizzaId = pizzaId;
            Name = name;
            Size = size;
            Toppings = toppings;
            Price = price;
            ToppingsCount = toppingsCount;
        }
        public Pizza() {
        
        }
    }
}
