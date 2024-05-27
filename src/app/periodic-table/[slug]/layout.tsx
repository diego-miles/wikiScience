
import LocalContextLinks from "@/components/LocalContextLinksTop"


const sectionTitles = [
    "1. Atomic Structure",
    "2. Physical Properties",
    "3. Chemical Properties",
    "4. Discovery and History",
    "5. Classifications",
    "6. Natural Occurrence",
    "7. Electron Configuration",
    "8. Crystal Structures",
    "9. Allotropes",
    "10. Isotopes and Abundances",
    "11. Oxidation States",
    "12. Compounds",
    "13. Magnetic and Electrical Properties",
    "14. Optical Properties",
    "15. Quantum Properties",
    "16. Spectral Lines",
    "17. Practical Applications",
    "18. Biological Role",
    "19. Health and Environmental Impact",
    "20. Economic Data",
    "21. Legal Status",
    "22. Safety Data Sheet",
    "23. Future Predictions",
    "24. Interdisciplinary Connections",
    "25. External Resources",
    "26. Synthesis and Production",
    "27. Environmental Safety",
    "28. User Interactions",
];



  // Crear enlaces a partir de los títulos de sección
  const links = sectionTitles.map(title => ({
    text: title,
    id: title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')
  }));



// export default function localContexLinks({
//   children,
// }: {
//   children: React.ReactNode
// }) {

//   <LocalContextLinks links={links}></LocalContextLinks>
//   return <section>{children}</section>
// }
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <nav></nav> */}
    <LocalContextLinks links={links}></LocalContextLinks>
      {children}
    </section>
  )
}




