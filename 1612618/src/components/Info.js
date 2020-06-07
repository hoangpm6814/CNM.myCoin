import React, { Component } from "react";
import Wallet from "./Wallet";
import Recipt from "./Recipt";
import Miner from "./Miner";
class Info extends Component {
    render() {
        const {
            user,
            listusers,
            gerenateBlock,
            hasUnconfrim,
            confirmBlock,
            checkWallet,
            newUnconfirmblock,
            miner,
            checkHistoty,
        } = this.props;
        return (
            <div className="row">
                <Wallet
                    user={user}
                    checkWallet={checkWallet}
                    checkHistoty={checkHistoty}
                />
                <Recipt
                    user={user}
                    listusers={listusers}
                    gerenateBlock={gerenateBlock}
                    newUnconfirmblock={newUnconfirmblock}
                />
                <Miner
                    user={user}
                    hasUnconfrim={hasUnconfrim}
                    confirmBlock={confirmBlock}
                    miner={miner}
                />
            </div>
        );
    }
}

export default Info;
