export default function DrawIO({ src }) {
    return (
        <iframe
            className="diagrams-iframe"
            style={{
                width: '100%',
                height: '75%',
                minWidth: '400px',
                minHeight: '400px',
                border: 'none'
            }}
            src={src}
        ></iframe>
    );
}