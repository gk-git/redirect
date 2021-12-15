import { h } from '@stencil/core';
import { createProviderConsumer } from '@stencil/state-tunnel';

export interface SiteState {
}

export default createProviderConsumer<SiteState>({
},
    (subscribe, child) => <context-consumer subscribe={subscribe} renderer={child} />
);