using System;
using System.Collections.Generic;

#nullable disable

namespace Backend_Medical.Models
{
    public partial class DossierMed
    {
        public int DmId { get; set; }
        public int? RdvId { get; set; }
        public string Prescription { get; set; }
        public string Resultat { get; set; }
    }
}
