import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-black pt-16 pb-8 border-t border-gray-200">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="font-display text-2xl font-bold italic text-black">PUNCH FITNESS</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Discipline over motivation. Results over hype. A premium training environment for those serious about real progress.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="https://instagram.com" className="bg-gray-200 p-2 rounded-full hover:bg-punch-red hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="https://facebook.com" className="bg-gray-200 p-2 rounded-full hover:bg-punch-red hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="https://youtube.com" className="bg-gray-200 p-2 rounded-full hover:bg-punch-red hover:text-white transition-colors">
                                <Youtube className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display text-lg font-bold mb-6 text-punch-red">EXPLORE</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="/locations" className="hover:text-punch-red transition-colors">Find Us</Link></li>
                            <li><Link href="/trainers" className="hover:text-punch-red transition-colors">Personal Training</Link></li>
                            <li><Link href="/classes" className="hover:text-punch-red transition-colors">Timetable</Link></li>
                            <li><Link href="/blog" className="hover:text-punch-red transition-colors">Fitness Tips</Link></li>
                        </ul>
                    </div>

                    {/* Legal / Info */}
                    <div>
                        <h4 className="font-display text-lg font-bold mb-6 text-punch-red">INFORMATION</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="/join" className="hover:text-punch-red transition-colors">Membership Types</Link></li>
                            <li><Link href="/faq" className="hover:text-punch-red transition-colors">FAQ</Link></li>
                            <li><Link href="/terms" className="hover:text-punch-red transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className="hover:text-punch-red transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display text-lg font-bold mb-6 text-punch-red">CONTACT</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-punch-red shrink-0 mt-1" />
                                <span>Opp. M.A.M. Higher Sec. School,<br />Jamuna Nagar, Koratty,<br />Kerala 680308</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-punch-red shrink-0" />
                                <a href="tel:+918714269090" className="hover:text-punch-red transition-colors">+91 87142 69090</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-punch-red shrink-0" />
                                <a href="mailto:punchfitnessglobal@gmail.com" className="hover:text-punch-red transition-colors text-xs">punchfitnessglobal@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-300 pt-8 text-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Punch Fitness Gym. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
}
