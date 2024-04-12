

const DarkIcon = () => {
  const styles = {
    width: "25px",
    height: "25px"
  }
  return (
    <>
      <svg style={styles} className="w-4 sm:w-5 h-4 sm:h-5 transition-all duration-150 ease-in-out text-white dark:flex hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
    </>
  )
}
export default DarkIcon;