namespace GymsterServices.Models
{
    public class Trainer
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string Mobile { get; set; } = string.Empty;

        public string City { get; set; }= string.Empty;
        public string Experience { get; set; }=string.Empty;
    }
}
