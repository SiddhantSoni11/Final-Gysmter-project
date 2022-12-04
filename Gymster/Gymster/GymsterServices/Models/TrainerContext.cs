using Microsoft.EntityFrameworkCore;

namespace GymsterServices.Models
{
    public class TrainerContext:DbContext
    {
        public TrainerContext(DbContextOptions<TrainerContext>options):base(options)
        
        {
                
        }
        public DbSet<Trainer> Trainers { get; set; }
    
    }
}
