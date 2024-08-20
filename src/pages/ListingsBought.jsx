import PersonalPageLayout from '../components/shared/Layouts/PersonalPageLayout'
import MainPage from '../components/UserListings/MainPage';

function ListingsBought() {
  return (
    <div>
            <PersonalPageLayout pageName={"Buying"}>
                <MainPage pageName={"Buying"}/>
            </PersonalPageLayout>
        </div>
    );
}

export default ListingsBought