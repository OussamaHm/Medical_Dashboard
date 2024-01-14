using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Backend_Medical.Models
{
    public partial class kokoContext : DbContext
    {
        public kokoContext()
        {
        }

        public kokoContext(DbContextOptions<kokoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<DossierMed> DossierMeds { get; set; }
        public virtual DbSet<GestionHoraire> GestionHoraires { get; set; }
        public virtual DbSet<Historique> Historiques { get; set; }
        public virtual DbSet<Patient> Patients { get; set; }
        public virtual DbSet<RendezV> RendezVs { get; set; }
        public virtual DbSet<Ressource> Ressources { get; set; }
        public virtual DbSet<Utilisateur> Utilisateurs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-LIKL60F;Database=koko;Integrated Security=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "French_CI_AS");

            modelBuilder.Entity<DossierMed>(entity =>
            {
                entity.HasKey(e => e.DmId)
                    .HasName("PK__dossier___56130D9A9DFCE3F4");

                entity.ToTable("dossier_med");

                entity.Property(e => e.DmId)
                    .ValueGeneratedNever()
                    .HasColumnName("dm_id");

                entity.Property(e => e.Prescription)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("prescription");

                entity.Property(e => e.RdvId).HasColumnName("rdv_id");

                entity.Property(e => e.Resultat)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("resultat");
            });

            modelBuilder.Entity<GestionHoraire>(entity =>
            {
                entity.HasKey(e => e.GdhId)
                    .HasName("PK__gestion___65FBFF69763B7698");

                entity.ToTable("gestion_horaire");

                entity.Property(e => e.GdhId)
                    .ValueGeneratedNever()
                    .HasColumnName("gdh_id");

                entity.Property(e => e.Heurdt)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("heurdt");

                entity.Property(e => e.RssId).HasColumnName("rss_id");
            });

            modelBuilder.Entity<Historique>(entity =>
            {
                entity.HasKey(e => e.HcId)
                    .HasName("PK__historiq__D3F4589889869842");

                entity.ToTable("historique");

                entity.Property(e => e.HcId)
                    .ValueGeneratedNever()
                    .HasColumnName("hc_id");

                entity.Property(e => e.Descr).HasColumnType("text");

                entity.Property(e => e.RdvId).HasColumnName("rdv_id");
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.HasKey(e => e.PatId)
                    .HasName("PK__patients__A118EE5A58D2C586");

                entity.ToTable("patients");

                entity.Property(e => e.PatId)
                    .ValueGeneratedNever()
                    .HasColumnName("pat_id");

                entity.Property(e => e.Adress)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("adress");

                entity.Property(e => e.History).HasColumnType("text");

                entity.Property(e => e.Nom)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nom");
            });

            modelBuilder.Entity<RendezV>(entity =>
            {
                entity.HasKey(e => e.RdvId)
                    .HasName("PK__rendez_V__8E31593A47CD9BBC");

                entity.ToTable("rendez_V");

                entity.Property(e => e.RdvId)
                    .ValueGeneratedNever()
                    .HasColumnName("rdv_id");

                entity.Property(e => e.Daate)
                    .HasColumnType("date")
                    .HasColumnName("daate");

                entity.Property(e => e.DocId).HasColumnName("doc_id");

                entity.Property(e => e.PatId).HasColumnName("pat_id");
            });

            modelBuilder.Entity<Ressource>(entity =>
            {
                entity.HasKey(e => e.RssId)
                    .HasName("PK__ressourc__CC50EA7A838ADE95");

                entity.ToTable("ressources");

                entity.Property(e => e.RssId)
                    .ValueGeneratedNever()
                    .HasColumnName("rss_id");

                entity.Property(e => e.Occupation)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("occupation");
            });

            modelBuilder.Entity<Utilisateur>(entity =>
            {
                entity.HasKey(e => e.PatId)
                    .HasName("PK__utilisat__A118EE5AC3CBB01A");

                entity.ToTable("utilisateurs");

                entity.Property(e => e.PatId)
                    .ValueGeneratedNever()
                    .HasColumnName("pat_id");

                entity.Property(e => e.UserEmail)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("userEmail");

                entity.Property(e => e.UserName)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("userName");

                entity.Property(e => e.UserPassword)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("userPassword");

                entity.Property(e => e.UserType).HasColumnName("userType");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
