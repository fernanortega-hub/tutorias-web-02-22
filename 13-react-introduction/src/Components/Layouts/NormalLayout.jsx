const NormalLayout = ({ children, className }) => (
    <section className={`flex flex-col h-screen p-4 ${className}`}>
        {children}
    </section>
)

export default NormalLayout