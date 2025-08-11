import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="bg-card rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-playfair font-bold mb-6">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              Last updated: July 1, 2024
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Introduction</h2>
            <p>
              These terms and conditions ("Terms") govern your access to and use of Alpha High School's website, including any content, functionality, and services offered on or through the website ("Website"). Please read the Terms carefully before you start to use the Website.
            </p>
            <p className="mt-4">
              By using the Website, you accept and agree to be bound and abide by these Terms. If you do not want to agree to these Terms, you must not access or use the Website.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Changes to the Terms</h2>
            <p>
              We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Website thereafter. Your continued use of the Website following the posting of revised Terms means that you accept and agree to the changes.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Accessing the Website</h2>
            <p>
              We reserve the right to withdraw or amend this Website, and any service or material we provide on the Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Intellectual Property Rights</h2>
            <p>
              The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Alpha High School, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Prohibited Uses</h2>
            <p>
              You may use the Website only for lawful purposes and in accordance with these Terms. You agree not to use the Website:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation;</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation;</li>
              <li>To impersonate or attempt to impersonate the School, a School employee, another user, or any other person or entity;</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website, or which, as determined by us, may harm the School or users of the Website, or expose them to liability.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">User Contributions</h2>
            <p>
              The Website may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, and other interactive features that allow users to post, submit, publish, display, or transmit to other users or other persons content or materials on or through the Website. All User Contributions must comply with the Content Standards set out in these Terms.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Disclaimer of Warranties</h2>
            <p>
              You understand that we cannot and do not guarantee or warrant that files available for downloading from the internet or the Website will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Limitation on Liability</h2>
            <p>
              To the fullest extent provided by law, in no event will the School, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Website, any websites linked to it, any content on the Website or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Governing Law and Jurisdiction</h2>
            <p>
              All matters relating to the Website and these Terms, and any dispute or claim arising therefrom or related thereto, shall be governed by and construed in accordance with the internal laws of India without giving effect to any choice or conflict of law provision or rule.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Information</h2>
            <p>
              To ask questions or comment about these Terms and our legal policies, contact us at: info@alphahighschool.edu.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;