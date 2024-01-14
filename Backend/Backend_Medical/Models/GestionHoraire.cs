using System;
using System.Collections.Generic;

#nullable disable

namespace Backend_Medical.Models
{
    public partial class GestionHoraire
    {
        public int GdhId { get; set; }
        public int? RssId { get; set; }
        public string Heurdt { get; set; }
    }
}
