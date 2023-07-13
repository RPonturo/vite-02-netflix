import {
    Page,
    Text,
    View,
    Image,
    Document,
    StyleSheet,
} from "@react-pdf/renderer";

const games = {
    data: [
        {
            id: "775061d5-5ca5-45ec-b620-c42d0405a896",
            name: "Chess",
            publisher: "N/A",
            genre: "Strategy",
            pegi_rating: 3,
            free_game: true,
            images: {
                avatar: "https://gameshard.s3.eu-central-1.amazonaws.com/games/avatars/Im4BxgzRhdukPofQJ4IdKjSnfCrQaPyrwxsaZFEt.png",
                cover: "https://gameshard.s3.eu-central-1.amazonaws.com/games/covers/ECQ05PbI1JKEjQgWIlQ1t3acCYRsAAQcWSitr8mW.png",
                thumbnail: "",
                icon: "https://gameshard.s3.eu-central-1.amazonaws.com/games/icons/fU6likFuC1WoRTefaj1q9Xmlu18ilgYMpXCLFzpA.png",
            },
            tournaments: 21,
            release_date: "6th century",
            created_at: "2020-12-05 12:05:20",
            updated_at: "2023-03-14 15:44:44",
        },
        {
            id: "7a3f93b7-3c77-48a7-b51a-bebca521a78c",
            name: "Clash Royale",
            publisher: "Supercell",
            genre: "Multiplayer, Card Game",
            pegi_rating: 7,
            free_game: true,
            images: {
                avatar: "https://gameshard.s3.eu-central-1.amazonaws.com/games/avatars/4BhEvBkLvSmI589wFjC9uO7HvF1jlYHRX1MJsujN.png",
                cover: "https://gameshard.s3.eu-central-1.amazonaws.com/games/covers/tpkGcuXTnQC4i0PQbbtQOEYJxv8TRtNRETjWxSEH.png",
                thumbnail: "",
                icon: "",
            },
            tournaments: 10,
            release_date: "2016-03-02 00:00:00",
            created_at: "2021-05-27 12:25:19",
            updated_at: "2023-03-14 15:45:20",
        },
        {
            id: "82181c11-e8d0-432f-9c3a-880efbeec102",
            name: "Rainbow Six Siege",
            publisher: "Ubisoft Entertainment",
            genre: "Action, Shooter",
            pegi_rating: 16,
            free_game: false,
            images: {
                avatar: "https://gameshard.s3.eu-central-1.amazonaws.com/games/avatars/1kVQkQ3NVTz7YCYw4M0KTXoUTEbXGX0KmBOEbtJY.png",
                cover: "https://gameshard.s3.eu-central-1.amazonaws.com/games/covers/eNHM6bdCDPpIiEsOc46LVnzflWXTic1aSPfXGvEl.png",
                thumbnail: "",
                icon: "https://gameshard.s3.eu-central-1.amazonaws.com/games/icons/pVatkUq8eNuWNKyAvlG39IZYXWgWZ66DlZ4lBJg0.png",
            },
            tournaments: 42,
            release_date: "2015-04-07 00:00:00",
            created_at: "2021-01-25 10:17:56",
            updated_at: "2023-03-14 15:45:42",
        },
    ],
    links: {
        first: "https://gameshard.io/api/games?page=1",
        last: "https://gameshard.io/api/games?page=2",
        prev: null,
        next: "https://gameshard.io/api/games?page=2",
    },
    meta: {
        current_page: 1,
        from: 1,
        last_page: 2,
        links: [
            { url: null, label: "&laquo; Previous", active: false },
            {
                url: "https://gameshard.io/api/games?page=1",
                label: "1",
                active: true,
            },
            {
                url: "https://gameshard.io/api/games?page=2",
                label: "2",
                active: false,
            },
            {
                url: "https://gameshard.io/api/games?page=2",
                label: "Next &raquo;",
                active: false,
            },
        ],
        path: "https://gameshard.io/api/games",
        per_page: 20,
        to: 20,
        total: 37,
    },
};

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    list: {
        flexDirection: "column",
        display: "flex",
    },
    listElement: {
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        padding: 5,
    },
    listElementImage: {
        width: "100px",
        marginRight: "10px",
    },
    listElementText: {
        display: "flex",
        flexDirection: "column",
    },
});

// Create Document Component
export const StampaPreferiti = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.list}>
                <Text>Film preferiti</Text>
                {games.data.map((el) => {
                    return (
                        <View style={styles.listElement} key={el.id}>
                            <Image
                                style={styles.listElementImage}
                                src={el.images.avatar}
                            />
                            <View style={styles.listElementText}>
                                <Text>{el.name}</Text>
                                <Text>Publisher: {el.publisher} </Text>
                                <Text>Release date: {el.release_date} </Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        </Page>
    </Document>
);
