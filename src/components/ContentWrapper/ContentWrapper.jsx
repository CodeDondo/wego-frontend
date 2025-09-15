
/*Destructure assignment af props*/
export const ContentWrapper = ({ title, description, subtitle, children }) => {
    document.title = title || "Mortens boilerplate"

    if (description) {
        const meta = document.querySelector('meta[name="description"]')
        if (meta) meta.setAttribute("content", description)
    }

    return (
        <>
            <h1>{title}</h1>
            {/*Conditional rendering*/
            subtitle && (
                <h2>{subtitle}</h2>
            )}
            {children}
        </>
    )
}
