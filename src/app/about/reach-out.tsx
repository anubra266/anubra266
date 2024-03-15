import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { css, cx } from "styled-system/css";
import { flex, stack } from "styled-system/patterns";
import { link, text } from "styled-system/recipes";

export function ReachOut() {
  return (
    <div
      className={stack({
        mt: "4",
        pb: "[34px]",
        px: "[var(--padding)]",
        maxW: "[var(--maxW)]",
        w: "full",
        gap: "10",
      })}
    >
      <p
        className={cx(text({ variant: "64" }), css({ fontWeight: "semibold" }))}
      >
        Reach out:
      </p>
      <div
        className={stack({
          direction: "row",
          gap: "10",
        })}
      >
        {SOCIALS.map((social, i) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cx(
              link(),
              text({ variant: "24" }),
              flex({ gap: "2", align: "center" })
            )}
          >
            <social.icon />
            {social.label}
          </a>
        ))}
      </div>
    </div>
  );
}

const SOCIALS = [
  {
    href: "https://twitter.com/anubra266/",
    label: "Twitter",
    icon: BsTwitter,
  },
  {
    href: "https://github.com/anubra266",
    label: "GitHub",
    icon: BsGithub,
  },
  {
    href: "https://www.linkedin.com/in/anubra266/",
    label: "LinkedIn",
    icon: BsLinkedin,
  },
  {
    href: "mailto:anubra266@gmail.com",
    label: "Email",
    icon: MdEmail,
  },
];
