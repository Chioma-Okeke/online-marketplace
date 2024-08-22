import PropTypes from "prop-types"

import NavContent from "./NavContent";
import UserListingsNavBar from "./UserListingsNavBar";

function NavContainer({ className, pageName }) {
    console.log(pageName, "name");
    return (
        <section className={`relative ${className}`}>
            <div className="nav-container lg:w-1/4 2xl:w-1/5 lg:bg-white lg:border p-2 md:p-5 lg:fixed top-0 left-0 lg:h-screen md:overflow-y-auto">
                {pageName === "Home" || pageName === "Listings" ? (
                    <NavContent />
                ) : (
                    <UserListingsNavBar pageName={pageName} />
                )}
            </div>
        </section>
    );
}

NavContainer.propTypes = {
    className: PropTypes.string,
    pageName:  PropTypes.string
}

export default NavContainer;
