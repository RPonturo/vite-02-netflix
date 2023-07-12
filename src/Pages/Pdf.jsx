import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    PDFDownloadLink,
} from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);
ReactPDF.renderToStream(<MyDocument />);
export default function Pdf() {
    return (
        <div className="row py-3 px-5 mx-0">
            <div className="col-12 fs-5">
                <PDFViewer>
                    <MyDocument />
                </PDFViewer>
            </div>
            <div className="col-12 fs-5">
                <PDFDownloadLink document={<MyDocument />} fileName="TEST">
                    {({ loading }) =>
                        loading ? (
                            <button>Loading</button>
                        ) : (
                            <button>Download</button>
                        )
                    }
                </PDFDownloadLink>
            </div>
        </div>
    );
}
