import styles from "./HowToUse.module.scss"

export const HowToUse = ({ isVisible, onClose, isMobile }) => {
  if (isMobile) {
    return (
      <section className={styles.howToUse}>
        <h1>Sådan virker det</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam leo libero, vitae ullamcorper nunc rutrum sit amet. Integer lobortis diam eu justo fermentum, lacinia laoreet urna efficitur. Mauris sit amet urna vulputate, vulputate turpis a, interdum elit. Fusce quis rutrum odio. Integer nec euismod felis. Praesent ex justo, ultrices a neque in, facilisis condimentum ex. Cras iaculis eget nulla a vestibulum. Donec suscipit eu nunc in dictum. Vestibulum congue scelerisque velit, ut tempus urna dictum eu. Morbi id nisi risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer feugiat dui id elit placerat, at volutpat nunc rhoncus.
        </p>
      </section>
    )
  }

  if (!isVisible) return null

  return (
    <div className={styles.overlay}>
      <section className={styles.modal}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h1>Sådan virker det</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam leo libero, vitae ullamcorper nunc rutrum sit amet. Integer lobortis diam eu justo fermentum, lacinia laoreet urna efficitur. Mauris sit amet urna vulputate, vulputate turpis a, interdum elit. Fusce quis rutrum odio. Integer nec euismod felis. Praesent ex justo, ultrices a neque in, facilisis condimentum ex. Cras iaculis eget nulla a vestibulum. Donec suscipit eu nunc in dictum. Vestibulum congue scelerisque velit, ut tempus urna dictum eu. Morbi id nisi risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer feugiat dui id elit placerat, at volutpat nunc rhoncus.
        </p>
      </section>
    </div>
  )
}
