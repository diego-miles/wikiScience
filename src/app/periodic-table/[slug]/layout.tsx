
import LocalContextLinksPeriodicTable from "@/components/LocalContextLinksTopPeriodicTable"
 

const sectionTitles = [
  "1. Atomic Structure",
  "2. History",
  "3. Physical Properties",
  "4. Chemical Properties",
  "5. Magnetic and Electrical Properties",
  "6. Optical Properties",
  "7. Quantum Properties",
  "8. Electron Configuration",
  "9. Natural Occurrence",
  "10. Crystal Structures",
  "11. Isotopes and Abundances",
  "12. Oxidation States",
  "13. Compounds",
  "14. Spectral Lines",
  "15. Allotropes",
  "16. Practical Applications",
  "17. Synthesis and Production",
  "18. Economic Data",
  "19. Biological Role",
  "20. Legal Status",
  "21. Health and Environmental Impact",
  "22. Environmental Safety",
  "23. Safety Data Sheet",
  "24. Future Predictions",
  "25. Interdisciplinary Connections",
  "26. External Resources",
  // "26. User Interactions",
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
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <nav></nav> */}
    <LocalContextLinksPeriodicTable links={links}>
    {/* <div className=" mt-[30rem] mx-auto w-fit ">
<PeriodicDrawer></PeriodicDrawer>
    </div> */}
    </LocalContextLinksPeriodicTable>

      {children}
    </>
  )
}




