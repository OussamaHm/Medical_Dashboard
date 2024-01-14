using System;
using System.Collections.Generic;

#nullable disable

namespace Backend_Medical.Models
{
    public partial class Utilisateur
    {
        public int PatId { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string UserPassword { get; set; }
        public int? UserType { get; set; }
    }
}
