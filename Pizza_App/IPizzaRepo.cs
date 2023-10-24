using Pizza_App.Models;

namespace Pizza_App
{
    public interface IPizzaRepo
    {
        Task<IReadOnlyList<Pizza>> Get();
        Task Post(Pizza pizza);
    }
}
