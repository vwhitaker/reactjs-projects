export default function Die({ value, isHeld, hold }) {
    const styles = {
        backgroundColor: isHeld ? "59E391" : "white"
    }

    return (
        <button style={styles} onClick={hold} aria-label={`Die with value ${value}`}>
            {value}
        </button>
    )
}