
import LocalContextLinksPeriodicTable from "@/components/LocalContextLinksTopPeriodicTable"
import { PeriodicDrawer } from '@/components/Drawer'


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
  "17. Biological Role",
  "18. Legal Status",
  "19. Safety Data Sheet",
  "20. Synthesis and Production",
  "21. Health and Environmental Impact",
  "22. Environmental Safety",
  "23. Economic Data",
  "24. Interdisciplinary Connections",
  "25. Future Predictions",
  "26. External Resources",
  "27. User Interactions",
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




