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
            forMiner,
            miner,
        } = this.props;
        return (
            <div className="row">
                <Wallet user={user} checkWallet={checkWallet} />
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
                    forMiner={forMiner}
                    user={user}
                    miner={miner}
                />
            </div>
        );
    }
}

export default Info;
