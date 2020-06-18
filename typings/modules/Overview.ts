import VueI18n from 'vue-i18n';

export interface Overview {
    buildings: unknown[];
}

export interface OverviewMethods {
    $m(
        key: string,
        args?: {
            [key: string]: unknown;
        }
    ): VueI18n.TranslateResult;
}
