import ListingsGrid from "../components/listings/ListingsGrid";
import PageLayout from "../components/shared/Layouts/PageLayout";

function Listings() {
    return (
        <PageLayout pageName={"Listings"}>
            <ListingsGrid />
        </PageLayout>
    );
}

export default Listings;
