"use client";

import { motion } from "@/components/ui/motion";
import { Linkedin, MessageCircle, Eye, ThumbsUp, ArrowRight } from "lucide-react";
import { linkedinPosts, linkedinConfig } from "@/data/linkedin";

export default function LinkedInProof() {
  return (
    <section
      className="px-6 bg-linear-to-b from-gray-50 via-white to-gray-50"
      style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-stone-600 mb-6">
            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            Industry Insights
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            From Our{" "}
            <span className="text-[#0A66C2]">LinkedIn</span>
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            We write about web performance, e-commerce costs, and platform risks. Here&apos;s what&apos;s getting attention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {linkedinPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-charcoal">{linkedinConfig.authorName}</div>
                  <div className="text-xs text-stone-600">{post.timeAgo} ago</div>
                </div>
              </div>

              <p className="text-stone-600 text-sm leading-relaxed mb-6 grow">
                {post.text}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-stone-200 text-xs text-stone-600">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-3.5 h-3.5" /> {post.reactions}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> {post.impressions}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href={linkedinConfig.personalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-stone-600 hover:text-charcoal transition-colors"
          >
            Follow on LinkedIn <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
