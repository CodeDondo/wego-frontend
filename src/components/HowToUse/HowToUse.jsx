import { useContentList } from "../../hooks/useContent"
import styles from "./HowToUse.module.scss"

export const HowToUse = ({ isVisible, onClose, isMobile }) => {
  const { ContentList, loading, error } = useContentList()

  if (loading) return <div>loading...</div>
  if (error) return <div>{error}</div>

  if (isMobile) {
    return (
      <>
        {ContentList.map(item => {
          const { id, title, content } = item
          return (
            <section key={id} className={styles.howToUse}>
              <h1>{title}</h1>
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </section>
          )
        })}
      </>
    )
  }



  if (!isVisible) return null
  return (
    <>
      {ContentList.map(item => {
        const { id, title, content } = item

        return (
          <div key={id} className={styles.overlay}>
            <section className={styles.modal}>
              <button className={styles.close} onClick={onClose}>×</button>
              <h1>{title}</h1>
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </section>
          </div>
        )
      })}
    </>
  )
}
