import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import { locales } from "@src/i18n";


export const {Link, redirect, usePathname, useRouter} =
	createSharedPathnamesNavigation({locales});