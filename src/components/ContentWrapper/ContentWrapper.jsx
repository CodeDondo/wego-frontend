
/*Destructure assignment af props*/
export const ContentWrapper = ({ title, description, subtitle, children }) => {
    document.title = title || "WeGo"

    if (description) {
        const meta = document.querySelector('meta[name="description"]')
        if (meta) meta.setAttribute("content", description)
    }

    return (
        <>
            {/*Conditional rendering*/
            subtitle && (
                <h2>{subtitle}</h2>
            )}
            {children}
        </>
    )
}
