using System;
using System.Collections.Generic;

#nullable disable

namespace Backend_Medical.Models
{
    public partial class RendezV
    {
        public int RdvId { get; set; }
        public int? PatId { get; set; }
        public int? DocId { get; set; }
        public string Daate { get; set; }
    }
}
